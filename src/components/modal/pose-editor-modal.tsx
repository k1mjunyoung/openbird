import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { ImageIcon } from "lucide-react";
import { usePostEditorModal } from "@/store/post-editor-modal";
import { useEffect, useRef, useState } from "react";

export default function PostEditorModal() {
  const { isOpen, close } = usePostEditorModal();

  const [content, setContent] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleCloseModal = () => {
    close();
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  });

  useEffect(() => {
    if (!isOpen) return;
    textAreaRef.current?.focus();
    // 모달이 닫혔을 때 content 초기화
    // setContent("");
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[90vh]">
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea
          ref={textAreaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h25 max-h-125 focus:outline-none"
          placeholder="무슨 일이 있었나요?"
        />
        <Button variant={"outline"} className="cursor-pointer">
          <ImageIcon />
          이미지 추가
        </Button>
        <Button className="cursor-pointer">저장</Button>
      </DialogContent>
    </Dialog>
  );
}
