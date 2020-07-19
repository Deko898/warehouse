import React from "react";
import { useStyles } from "./DropZone.style";
import clsx from "clsx";

interface IProps {
  handleFileDrop: Function;
}

const DropZone = ({ handleFileDrop }: IProps) => {
  const classes = useStyles();
  const [isEntered, handleEnteredState] = React.useState(false);

  const dragOver = (e: any) => {
    e.preventDefault();
    handleEnteredState(true);
  };

  const dragEnter = (e: any) => {
    e.preventDefault();
    handleEnteredState(true);
  };

  const dragLeave = (e: any) => {
    e.preventDefault();
    handleEnteredState(false);
  };

  const fileDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileDrop(files);
  };

  //   classNames({
  //     'btn': true,
  //     'btn-pressed': this.state.isPressed,
  //     'btn-over': !this.state.isPressed && this.state.isHovered
  //   })

  return (
    <div className={classes.container}>
      <div
        className={clsx(classes.dropContainer, {
          [classes.dragEnter]: isEntered,
        })}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <div className={classes.dropMessage}>
          {/* <div className={classes.uploadIcon}></div> */}
          Drag & Drop file here
        </div>
      </div>
    </div>
  );
};
export default DropZone;
