import PostEditorModal from "@/components/modal/post-editor-modal";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function ModalProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {/* creratePortal: 모달을 렌더링 할 때 특정 DOM 요소 아래에 바로 렌더링 될 수 있도록 사용 */}
      {createPortal(
        <PostEditorModal />,
        document.getElementById("modal-root")!,
      )}
      {children}
    </>
  );
}
