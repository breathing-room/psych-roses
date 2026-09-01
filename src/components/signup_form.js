import React from 'react';

const MAILCHIMP_POST =
  'https://tascheandthepsychedelicroses.us18.list-manage.com/subscribe/post?u=833534bcdb474b73457692cf5&id=0031127239&f_id=007909e7f0';

const SignUpForm = () => (
  <div className="w-full max-w-md mx-auto">
    <div id="mc_embed_signup">
      <form
        action={MAILCHIMP_POST}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_self"
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address  <span className="asterisk">*</span>
            </label>
            <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" required />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div style={{ position: 'absolute', left: '-5000px', height: 0, overflow: 'hidden' }} aria-hidden="true">
            <input type="text" name="b_833534bcdb474b73457692cf5_0031127239" tabIndex="-1" defaultValue="" />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default SignUpForm;
