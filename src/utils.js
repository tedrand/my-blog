function formatLocalPath(path) {
    let splitPath = path.split("/")
    let slug = splitPath[splitPath.length - 1]
    let splitSlug = slug.split("_")
    for (let i = 0; i < splitSlug.length; i++) {
        // check for big v.
        if (splitSlug[i] !== "v.") {
            splitSlug[i] =
                splitSlug[i].charAt(0).toUpperCase() + splitSlug[i].substring(1)
        }
    }
    let name = splitSlug.join(" ")
    name = name.substr(0, name.lastIndexOf("."))
    return { slug, name }
}

export default { formatLocalPath }