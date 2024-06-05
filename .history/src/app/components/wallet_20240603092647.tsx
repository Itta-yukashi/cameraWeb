import { createThirdwebClient } from "thirdweb";
import { inAppWallet } from "thirdweb/wallets";

const client = createThirdwebClient({ clientId:"3afeb340ac76c7e21b9072aefc09a333" });
const wallets = inAppWallet();
const account = await wallet.connect({
  client,
  strategy: "google", // The authentication strategy to use, can be any of the supported strategies (google, facebook, apple, passkey, email, jwt)
});
