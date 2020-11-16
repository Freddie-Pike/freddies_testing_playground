import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const getOrCreateElement = (createElement, gid, parentId) => {
  const parent = parentId ? document.getElementById(parentId) : document.body;
  const element = document.getElementById(gid);
  if (createElement && !element) {
    const newElement = document.createElement("div");
    newElement.setAttribute("id", gid);
    parent.appendChild(newElement);
    return newElement;
  }
  return element;
};

export const Portal = ({ children, gid, parentId, createElement }) =>
  createPortal(children, getOrCreateElement(createElement, gid, parentId));

Portal.defaultProps = {
  children: null,
};

export const eventListener = (element, eventName, listener) => {
  element.addEventListener(eventName, listener);
  return () => element.removeEventListener(eventName, listener);
};

const documentListener = (eventName, listener) => eventListener(document, eventName, listener);

export default function Modal({
  variantSize,
  show,
  onClickOutside = () => {},
  children,
  dropzoneOptions,
  ...props
}) {
  const [openOrAnimating, setOpenOrAnimating] = useState(false);
  const inside = useRef();

  useEffect(() => {
    if (show) {
      setOpenOrAnimating(true);
    }
  }, [show]);

  useEffect(() =>
    documentListener(
      "mousedown",
      (event) => {
        debugger;
        const clickWasInDialog = [
          document.getElementById("context-menu-container"),
        ].some((element) => element?.contains(event.target));

        if (!clickWasInDialog && !inside.current?.contains(event.target)) {
          onClickOutside();
        }
      },
      false
    )
  );

  return (
    <Portal createElement gid="modal-container">
      {openOrAnimating && (
        <div className={classNames(styles.overlay, { [styles.overlayLeaving]: !show })}>
          <div
            ref={inside}
            onAnimationEnd={({ animationName }) => {
              debugger;
              setOpenOrAnimating(!animationName.includes("out"));
            }}
            {...props}
            className={classNames(styles.container, {
              [styles.containerLeaving]: !show,
            })}
          >
            {children}
          </div>
        </div>
      )}
    </Portal>
  );
}

Modal.propTypes = {};
