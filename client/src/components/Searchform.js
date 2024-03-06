const Searchform = () => {
    return (
        <div className="searchform">
            <form id="formsearch" name="formsearch" method="post" action="#">
                <span>
                    <input
                        name="editbox_search"
                        className="editbox_search"
                        id="editbox_search"
                        maxLength={80}
                        defaultValue="Tìm kiếm bài hát"
                        type="text"
                    />
                </span>
                <input
                    name="button_search"
                    src="/images/search.jpg"
                    className="button_search"
                    type="image"
                />
            </form>
        </div>
    )
}

export default Searchform;