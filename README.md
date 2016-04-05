An "Add to LinkedIn" button to display your accomplishments from Treehouse.

# Demo

https://kortaggio.github.io/treehouse-to-linkedin

# Install instructions

You need to run a static file serve so that CORS doesn't fail when making an API request to the Treehouse server. If you google "how to run a static file serve in ${LANGUAGE_OF_YOUR_CHOICE}" you'll find instructions for doing that. Alternatively, if you like Python, the simplest way to run a static file serve is to use the following command in the root folder:

```
# Python 2.x
$ python -m SimpleHTTPServer

# Python 3.x
$ python -m http.server
```
If you try running this app locally, you'll also need to ensure that you're running from a secure origin (i.e. the protocol is `https` and not `http`). You can do this either by issuing yourself a self-signed cert for development, or use something like [ngrok](https://ngrok.com/) to grab a `https` tunnel to localhost.
