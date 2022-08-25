import React from 'react';

const SignUpForm = () => {
    const html = `
    <!-- Begin Mailchimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
    <style type="text/css">
        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
        We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup">
        <form action="https://tascheandthepsychedelicroses.us18.list-manage.com/subscribe/post?u=833534bcdb474b73457692cf5&amp;id=0031127239&amp;f_id=007909e7f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
            <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
    <div class="mc-field-group">
        <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
    </label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
    </div>
        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_833534bcdb474b73457692cf5_0031127239" tabindex="-1" value=""></div>
            <div class="optionalParent">
                <div class="clear foot">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>
            </div>
        </div>
    </form>
</div>

<!--End mc_embed_signup-->
    `
    return <div class="mx-auto" dangerouslySetInnerHTML={{ __html: html }} />
  }

export default SignUpForm
