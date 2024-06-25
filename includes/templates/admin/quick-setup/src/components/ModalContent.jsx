import { __ } from "@wordpress/i18n";

function ModalContent({ closeModal }) {
  let eaelQuickSetup = localize?.eael_quick_setup_data;
  let modal_content = eaelQuickSetup?.modal_content;
  let success_2_src = modal_content?.success_2_src;

  return (
    <>
      <section className="eael-modal-wrapper">
        <div className="eael-modal-content-wrapper eael-onboard-modal">
          <div className="congrats--wrapper">
            <img className="eael-modal-map-img" src={success_2_src} alt={__('Success Image', 'essential-addons-for-elementor-lite')} />
            <h6>{__('That’s a wrap! You are successfully onboard now.', 'essential-addons-for-elementor-lite')} 🎉</h6>
            <h4 className="congrats--title">{__('Congratulations!', 'essential-addons-for-elementor-lite')}</h4>
          </div>
          <div className="eael-modal-close-btn" onClick={closeModal}>
            <i className="ea-dash-icon ea-close"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default ModalContent;