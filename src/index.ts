import privateKeys from "./pk.json";
import { createWalletClient, http } from "viem";
import { mainnet } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

const walletClient = createWalletClient({
  chain: mainnet,
  transport: http(),
});

async function checkEachEligibility() {
  for (const pk of privateKeys) {
    const account = privateKeyToAccount(pk as `0x${string}`);
    const timestamp = Math.floor(Date.now() / 1000);
    const messageToSign = `Greetings from Avail!

Sign this message to check your eligibility. This signature will not cost you any fees.

Timestamp: ${timestamp}`;

    const signature = await walletClient.signMessage({
      account,
      message: messageToSign,
    });

    await checkEligibility(account.address, timestamp, signature);
  }
}

async function checkEligibility(
  accountAddress: string,
  timestamp: number,
  signedMessage: string
) {
  const response = await fetch(
    "https://claim-api.availproject.org/check-rewards",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: accountAddress,
        type: "ETHEREUM",
        timestamp,
        signedMessage,
      }),
    }
  );

  if (!response.ok) {
    console.error(
      "Failed to send eligibility check for account:",
      accountAddress,
      response.status,
      response.statusText
    );
    return;
  }

  const data = await response.json();
  console.log(`Account Address: ${accountAddress} - Message: ${data.message}`);
}

checkEachEligibility();
