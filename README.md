# About This Project
This project provides a Google Chrome extension and Mozilla Firefox OpenSearch plugin to allow you to search the <a href="https://keyserver.pgp.com/">PGP Global Directory</a>, maintained by <a href="http://www.symantec.com">Symantec</a> (which acquired PGP Corporation in 2010) for OpenPGP keys from within your favorite web browser.

## Background
OpenPGP standard keys allow an individual to create and send confidential communications by encrypting a message to the owner of the public key. In addition, the authenticity of a digitally signed messages can be confirmed using the signer's public key.

For users of encryption software from <a href="http://www.pgp.com">PGP Corporation</a> (now <a href="http://www.symantec.com">Symantec</a>), or Open Source equivalents such as <a href="http://gnupg.org">GPG</a>, the process of finding public OpenPGP encryption keys can sometimes be a bit annoying. While public keyservers have been around for a while, they often had a lot of problems. In 2005, PGP Corporation released the <a href="http://keyserver.pgp.com">PGP Global Directory</a> to address these problems by providing a trusted repository of public keys with verified email addresses. This directory is used automatically by software from PGP Corporation, and can be used (with some configuration) by other Open Source packages.

Although the PGP Global Directory features a web-based interface, I thought it might be useful to be able to perform a quick lookup directly from my web-browser. Modern web-browsers, such as Mozilla Firefox and Internet Explorer, support <a href="http://www.opensearch.org">OpenSearch</a>, a mechanism that allows (among other things) the development of plugins that can perform searches from within the browser. For Google Chrome, a simple extension provides similar functionality, albeit not directly integrated with the main location bar / search input.

# Requirements
* <a href="http://www.google.com/chrome/">Google Chrome</a>: Version 25 or later (haven't tested with earlier versions)
* <a href="http://www.mozilla.org/firefox/">Mozilla Firefox</a>: Version 20 or later (haven't tested with earlier versions)
* <a href="http://www.microsoft.com/ie/">Internet Explorer</a>: Version TBD

# Installation
## Google Chrome Extension

A pre-packaged version of the Google Chrome extension is available on the <a href="https://chrome.google.com/webstore/detail/pgp-global-directory-sear/ihmbcbppgmdahgbklhpggcdpnpkjjila">Chrome Web Store</a>. You can also install the extension manually using the following procedure.

**To manually build and install the Google Chrome extension:**

1. Download and unzip the project to a local working directory.
2. Open **Google Chrome** and navigate to **chrome://extensions**.
3. Make sure that **Developer mode** is checked.
4. Click **Pack extension...**
5. Click **Browse** for the **Extension root directory**.
6. Browse to the **src** directory in the working directory.
7. Select the **chrome** directory and click **Select**.
8. Click **Pack extension**.
9. Note the location of the packaged extension, **chrome.crx**.
10. Click **OK** to dismiss the notification dialog.
11. Drag and drop the **chrome.crx** extension from your operating system's file browser to Google Chrome.
12. Click **Add**.

The packed extension will be loaded into Google Chrome.

## Mozilla Firefox OpenSearch Plugin

You could download and unzip the project, modify src/firefox/install.html per the instructions in that file. Or you could just <a href="http://www.brendonwilson.com/wp-content/uploads/projects/pgp-global-directory-opensearch-plugin/install.html">go here</a> and click the installation link.

## Internet Explorer OpenSearch Plugin

Instructions coming soon. Need to test compatibility with new versions of Internet Explorer.

# Potential Future Improvements

* Configurability to search one or more standard PGP keyservers

# For More Information
For more information about OpenPGP, see <a href="http://tools.ietf.org/html/rfc4880">IETF RFC 4880</a>.
