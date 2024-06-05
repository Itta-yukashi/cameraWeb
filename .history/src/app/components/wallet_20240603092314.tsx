import { inAppWallet } from "thirdweb/wallets";

const client = createThirdwebClient({ clientId:"" });
const wallet = inAppWallet();
const account = await wallet.connect({
  client,
  strategy: "google", // The authentication strategy to use, can be any of the supported strategies (google, facebook, apple, passkey, email, jwt)
});
