import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
plugins: [react()],
base: "./" // indispensable pour éviter le blanc quand servi depuis un sous-dossier / preview
});