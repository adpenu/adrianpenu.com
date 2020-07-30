import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const SocialShare = ({ socialConfig }) => (
  <div className='p-social-share'>
    <i className='p-icon--share' title="Share on social meadia"></i>
    <FacebookShareButton
      url={socialConfig.config.url}
      quote={socialConfig.config.title}
      className='button is-outlined is-rounded facebook'>
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
    <TwitterShareButton
      url={socialConfig.config.url}
      quote={socialConfig.config.title}
      className='button is-outlined is-rounded facebook'>
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    <LinkedinShareButton
      url={socialConfig.config.url}
      quote={socialConfig.config.title}
      className='button is-outlined is-rounded facebook'>
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
  </div>
);

SocialShare.propTypes = {
  socialConfig: PropTypes.shape({
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

SocialShare.defaultProps = {
  tags: [],
};

export default SocialShare;
