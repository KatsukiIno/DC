// 左サイドメニュー内のdetails開閉アニメーションのモジュール
import gsap from "https://cdn.skypack.dev/gsap@3.10.4";

document.querySelectorAll("details").forEach((details) => {
  const summary = details.querySelector("summary");
  const content = details.querySelector("summary + *");

  const onClick = (event) => {
    if (details.open) {

      event.preventDefault();
      details.setAttribute("data-accordion-before-close", "");
      gsap.to(content, {
        height: 0,
        onComplete: () => {
          details.open = false;
          details.removeAttribute("data-accordion-before-close");
        },
      });
    } else {
      gsap.fromTo(content, { height: 0 }, { height: "auto" });
    }
  };

  summary.addEventListener("click", onClick, { passive: false });
});