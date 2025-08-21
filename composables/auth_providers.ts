import { config } from "../customconfig/config.js";
const authProviders = [
  {
    active: config.auth.oAuth.google,
    icon: "uil:google",
    provider: "google",
  },
  {
    active: config.auth.oAuth.facebook,
    icon: "uil:facebook",
    provider: "facebook",
  },
  {
    active: config.auth.oAuth.github,
    icon: "uil:github",
    provider: "github",
  },
  {
    active: config.auth.oAuth.twitter,
    icon: "uil:twitter",
    provider: "twitter",
  },
  {
    active: config.auth.oAuth.discord,
    icon: "uil:discord",
    provider: "discord",
  },
  {
    active: config.auth.oAuth.apple,
    icon: "uil:apple",
    provider: "apple",
  },
  {
    active: config.auth.oAuth.microsoft,
    icon: "uil:microsoft",
    provider: "microsoft",
  },
  {
    active: config.auth.oAuth.keycloak,
    icon: "simple-icons:keycloak",
    provider: "keycloak",
  },
];

export default authProviders;
