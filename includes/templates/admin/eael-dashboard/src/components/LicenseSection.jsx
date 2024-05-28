import consumer from "../context";
import LicenseSteps from "./LicenseSteps.jsx";
import LicenseForm from "./LicenseForm.jsx";
import LicenseOtpForm from "./LicenseOtpForm.jsx";
import LicenseUnlockBox from "./LicenseUnlockBox.jsx";
import LicenseActivatedBox from "./LicenseActivatedBox.jsx";

function LicenseSection() {
    const licenseData = typeof wpdeveloperLicenseData === 'undefined' ? {} : wpdeveloperLicenseData,
        {eaState, eaDispatch} = consumer(),
        isOpenForm = eaState?.licenseFormOpen === true,
        clickHandler = () => {
            eaDispatch({type: 'OPEN_LICENSE_FORM', payload: !isOpenForm});
        };

    return (
        <>
            <div className="ea__general-content-item relative">
                {licenseData?.license_status !== 'valid' ? <LicenseUnlockBox/> : <LicenseActivatedBox/>}
                <div className="ea__license-wrapper">
                    {licenseData?.license_status !== 'valid' &&
                        <div className="ea__license-content" onClick={clickHandler}>
                            <h5>
                                How to get license key?
                            </h5>
                            <i className="ea-dash-icon ea-dropdown"></i>
                        </div>
                    }

                    {licenseData?.license_status === 'valid' &&
                        <div className="ea__license-options-wrapper">
                            <LicenseForm/>
                        </div>
                    }

                    {(licenseData?.license_status !== 'valid' && isOpenForm) &&
                        <div className="ea__license-options-wrapper">
                            <LicenseSteps/>
                            <LicenseForm/>
                            {eaState?.otp === true && <LicenseOtpForm/>}
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default LicenseSection;