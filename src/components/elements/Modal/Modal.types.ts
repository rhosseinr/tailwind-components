export interface ModalProps {
  className?: string;
  children?: any;
  onClose: () => void;
  onEnter?: () => void | null;
}
