import { Env } from "../environment";

declare global {
    interface Window {
        twlang_std: Env
    }
}