// All major React event types
export type ReactEvents = {
  // Mouse Events
  onClick: React.MouseEvent<HTMLElement>;
  onMouseDown: React.MouseEvent<HTMLElement>;
  onMouseUp: React.MouseEvent<HTMLElement>;
  onMouseEnter: React.MouseEvent<HTMLElement>;
  onMouseLeave: React.MouseEvent<HTMLElement>;
  onMouseMove: React.MouseEvent<HTMLElement>;
  onMouseOut: React.MouseEvent<HTMLElement>;
  onMouseOver: React.MouseEvent<HTMLElement>;
  
  // Keyboard Events
  onKeyDown: React.KeyboardEvent<HTMLElement>;
  onKeyUp: React.KeyboardEvent<HTMLElement>;
  onKeyPress: React.KeyboardEvent<HTMLElement>; // Deprecated
  
  // Form Events
  onChange: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
  onInput: React.FormEvent<HTMLInputElement>;
  onSubmit: React.FormEvent<HTMLFormElement>;
  onReset: React.FormEvent<HTMLFormElement>;
  
  // Focus Events
  onFocus: React.FocusEvent<HTMLElement>;
  onBlur: React.FocusEvent<HTMLElement>;
  
  // Clipboard Events
  onCopy: React.ClipboardEvent<HTMLElement>;
  onCut: React.ClipboardEvent<HTMLElement>;
  onPaste: React.ClipboardEvent<HTMLElement>;
  
  // Drag Events
  onDrag: React.DragEvent<HTMLElement>;
  onDragStart: React.DragEvent<HTMLElement>;
  onDragEnd: React.DragEvent<HTMLElement>;
  onDragOver: React.DragEvent<HTMLElement>;
  onDrop: React.DragEvent<HTMLElement>;
  
  // Touch Events
  onTouchStart: React.TouchEvent<HTMLElement>;
  onTouchMove: React.TouchEvent<HTMLElement>;
  onTouchEnd: React.TouchEvent<HTMLElement>;
  
  // Animation Events
  onAnimationStart: React.AnimationEvent<HTMLElement>;
  onAnimationEnd: React.AnimationEvent<HTMLElement>;
  
  // Transition Events
  onTransitionEnd: React.TransitionEvent<HTMLElement>;
  
  // UI Events
  onScroll: React.UIEvent<HTMLElement>;
  onResize: React.UIEvent<HTMLElement>;
  
  // Media Events (for video/audio)
  onPlay: React.SyntheticEvent<HTMLVideoElement>;
  onPause: React.SyntheticEvent<HTMLVideoElement>;
  onEnded: React.SyntheticEvent<HTMLVideoElement>;
};


export type User = {
  id: number;
  name: string;
  role: string;
  email: string;
  status: "Active" | "Inactive";
};

export type Style = {
  style: {
    margin: number;
  };
func:()=>void;
};
