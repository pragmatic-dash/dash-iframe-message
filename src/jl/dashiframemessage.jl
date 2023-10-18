# AUTO GENERATED FILE - DO NOT EDIT

export dashiframemessage

"""
    dashiframemessage(;kwargs...)

A DashIframeMessage component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `height` (String; required): The height of the iframe
- `message` (Dict; optional): The message from iframe.
- `src` (String; required): The src of the iframe
- `width` (String; optional): The width of the iframe
"""
function dashiframemessage(; kwargs...)
        available_props = Symbol[:id, :height, :message, :src, :width]
        wild_props = Symbol[]
        return Component("dashiframemessage", "DashIframeMessage", "dash_iframe_message", available_props, wild_props; kwargs...)
end

