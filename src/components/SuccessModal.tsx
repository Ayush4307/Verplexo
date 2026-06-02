interface SuccessModalProps {
  onClose: () => void;
}

export const SuccessModal = ({ onClose }: SuccessModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Brief Received!</h3>
        <p>
          Thank you for sharing your project details. We will analyze your requirements and reach out to you within 24 hours to schedule a strategy call.
        </p>
        <button
          className="button button-primary"
          onClick={onClose}
          style={{ width: '100%', minHeight: '2.8rem' }}
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};

// verplexo-optim-iter-9

// verplexo-optim-iter-21
