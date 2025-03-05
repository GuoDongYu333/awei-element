import { makeInstaller } from "@font-end-ui/utils";
import components from "./components";
import "@font-end-ui/theme/index.css";

const installer = makeInstaller(components);

export * from "@font-end-ui/components";

export default installer;
