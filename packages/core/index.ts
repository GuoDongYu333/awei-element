import { makeInstaller } from "@font-end-ui/utils";
import components from "./components";
import "@font-end-ui/theme/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
const installer = makeInstaller(components);

export * from "@font-end-ui/components";

export default installer;
