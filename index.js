import url from 'url';

class Via {
    /**
     * @param link
     * @param source
     * @param medium
     * @param campaign
     * @param content
     * @param term
     * @returns {*}
     */
    constructor(link, source, medium, campaign, content, term) {

        if (!link) {
            throw new Error('The link parameter is required.');
        }

        if (!source) {
            throw new Error('The source parameter is required.');
        }

        this.uri = url.parse(link, true);
        this.uri.query = this.uri.query || {};

        this.uri.query['utm_source'] = source;

        if (medium != null) {
            this.uri.query['utm_medium'] = medium;
        }

        if (campaign != null) {
            this.uri.query['utm_campaign'] = campaign;
        }

        if (content != null) {
            this.uri.query['utm_content'] = content;
        }

        if (term != null) {
            this.uri.query['utm_term'] = term;
        }
    }
    // TODO: Add ability to parse slug (e.g. link?via=homepage-link)
    // TODO: Map slug to key=>value store of campaigns
    // TODO: Move google campaign stuff into method to send via request
}

module.exports = Via;
