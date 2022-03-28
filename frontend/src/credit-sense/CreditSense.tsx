import { useScript } from '../hooks'
import "./jquery.js"
import "./iframe-script.js"

const CREDITSENSE_IFRAME_SCRIPT = "https://6dadc58e31982fd9f0be-d4a1ccb0c1936ef2a5b7f304db75b8a4.ssl.cf4.rackcdn.com/CS-Integrated-Iframe-v1.min.js"

export const CreditSense = () => {
    useScript(CREDITSENSE_IFRAME_SCRIPT);
    return (
        <div>
            <iframe
                id="creditSenseIFrame"
                src="about:blank"
                style={{
                    height: "580px",
                    width: "98%",
                    border: "none"
                }}>
                iframes are not supported in this browser
            </iframe>
        </div>
    )
}
