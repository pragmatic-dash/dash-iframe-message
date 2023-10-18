import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashIframeMessage extends Component {
    componentDidMount() {
        window.addEventListener('message', this.handleMessage, false);
    }

    handleMessage = (event) => {
        if (typeof event.data !== "object" || event.data.type !== 'IFrameMessage') {
            return;
        }
        this.props.setProps({message: event.data});
    }

    render() {
        const {id, src, height, width} = this.props;
        let safeSrc = encodeURI(src);
        const contentDoc = `
        <!DOCTYPE html>
        <html style="width:100%; height:100%">
          <body style="width:100%; height:100%">
            <iframe src="${safeSrc}"
                    style="border: none; width: 100%; height: 100%;">
            </iframe>
            <script>
              function receiveMessage(event) {
                  window.parent.postMessage({"type": "IFrameMessage", "data": event.data}, '*');
              }
              window.addEventListener('message', receiveMessage, false);
            </script>
          </body>
        </html>
        `
        return (
            <iframe
            id={id || ''}
            srcDoc={contentDoc} style={{border: 'none', width: width || '100%', height: height || '100px'}}/>
        );
    }
}

DashIframeMessage.defaultProps = {};

DashIframeMessage.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The message from iframe.
     */
    message: PropTypes.object,

    /**
     * The src of the iframe
     * */
    src: PropTypes.string.isRequired,

    /**
     * The width of the iframe
     */
    width: PropTypes.string,

    /**
     * The height of the iframe
     * */
    height: PropTypes.string.isRequired,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
