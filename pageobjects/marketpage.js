class HomePage {

    get map_value() {
        return $$(".js-map-values")
    }

    get auction_button() {
        return $('#edit-filters-modality-auction--4jKP3wWDqR8')
    }

    get continuous() {
        return $('#edit-filters-modality-continuous')
    }

    get capacity_auction() {
        return $('div.scroll-bloc > div:nth-child(2) > div:nth-child(3) > label > span')
    }

    get guarantees_Origin() {
        return $('div.scroll-bloc > div:nth-child(2) > div:nth-child(4) > label > span')
    }

    get filter_1() {
        return $('//*[@data-value="03"]')
    }

    get links() {
        return $('//a')
    }

    get test() {
        return $("//a[@data-value='05']")
    }

}

module.exports = new HomePage()

