import React from 'react';
import { StyleRoot } from 'radium';
import SelectPage from './component/SelectPage';
import GuidePage from './component/GuidePage';

import PageIosNew from './pages/ios-new.md';
import PageIosExisting from './pages/ios-existing.md';
import PageAndroidNew from './pages/android-new.md';
import PageAndroidExisting from './pages/android-existing.md';
import PageJsNew from './pages/js-new.md';
import PageJsExisting from './pages/js-existing.md';
const Page = {
  ios: {
    new: PageIosNew,
    existing: PageIosExisting,
  },
  android: {
    new: PageAndroidNew,
    existing: PageAndroidExisting,
  },
  js: {
    new: PageJsNew,
    existing: PageJsExisting,
  },
};

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    const { sdk, hideSDKTabs } = props;
    let { project } = props;
    if (!sdk && project) {
      throw Error('[skygear-getstarted] Error: SDK not specified');
    }
    if (sdk && !Page[sdk]) {
      throw Error(`[skygear-getstarted] No such SDK: ${sdk}`);
    }
    if (project && !Page[sdk][project]) {
      throw Error(`[skygear-getstarted] No such project: ${project}`);
    }
    if (sdk && !project) {
      project = 'new';
    }
    this.state = { sdk, project, hideSDKTabs };
  }

  render() {
    const self = this;
    const { className } = this.props;
    const { sdk, project, hideSDKTabs } = this.state;
    const fontCSS = '@import url("//fonts.googleapis.com/css?family=Lato:400,700");';
    const guideContent = Page[sdk] && Page[sdk][project];
    const Template = (guideContent) ? GuidePage : SelectPage;
    return (
      <div {...{ className }}>
        <StyleRoot>
          <style dangerouslySetInnerHTML={{ __html: fontCSS }} />
          <Template
            sdk={sdk}
            project={project}
            hideSDKTabs={hideSDKTabs}
            guideContent={guideContent}
            setSDK={(targetSDK) => self.setState({ sdk: targetSDK })}
            setProject={(targetProject) => self.setState({ project: targetProject })}
          />
        </StyleRoot>
      </div>
    );
  }
}

GetStarted.propTypes = {
  sdk: React.PropTypes.string,
  project: React.PropTypes.string,
  hideSDKTabs: React.PropTypes.bool,
  className: React.PropTypes.string,
};
