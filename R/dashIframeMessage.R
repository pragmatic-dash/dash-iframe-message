# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashIframeMessage <- function(id=NULL, height=NULL, message=NULL, src=NULL, width=NULL) {
    
    props <- list(id=id, height=height, message=message, src=src, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashIframeMessage',
        namespace = 'dash_iframe_message',
        propNames = c('id', 'height', 'message', 'src', 'width'),
        package = 'dashIframeMessage'
        )

    structure(component, class = c('dash_component', 'list'))
}
