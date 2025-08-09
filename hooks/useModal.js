import { useState, useCallback } from 'react';

/**
 * Custom hook for managing modal state
 * Provides open/close functionality with optional callbacks
 */
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    setIsOpen
  };
};

/**
 * Advanced modal hook with additional features
 * Includes backdrop click handling, escape key support, and custom callbacks
 */
export const useAdvancedModal = (options = {}) => {
  const {
    initialState = false,
    onOpen,
    onClose,
    closeOnBackdropClick = true,
    closeOnEscape = true
  } = options;

  const [isOpen, setIsOpen] = useState(initialState);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    setIsAnimating(true);
    onOpen?.();
  }, [onOpen]);

  const closeModal = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
      onClose?.();
    }, 150); // Animation duration
  }, [onClose]);

  const toggleModal = useCallback(() => {
    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  }, [isOpen, openModal, closeModal]);

  const handleBackdropClick = useCallback((event) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      closeModal();
    }
  }, [closeOnBackdropClick, closeModal]);

  const handleEscapeKey = useCallback((event) => {
    if (closeOnEscape && event.key === 'Escape' && isOpen) {
      closeModal();
    }
  }, [closeOnEscape, isOpen, closeModal]);

  return {
    isOpen,
    isAnimating,
    openModal,
    closeModal,
    toggleModal,
    handleBackdropClick,
    handleEscapeKey,
    setIsOpen
  };
};

export default useModal;