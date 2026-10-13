import { redirect } from "next/navigation";

// A página do Mestre agora é uma seção da home.
export default function MestrePage() {
  redirect("/#mestre");
}
