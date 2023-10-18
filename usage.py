import dash_iframe_message
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    dash_iframe_message.IframeMessage(
        src='https://dash-iframe-message.herokuapp.com/',
        height='500px',
        id='input',
    ),
    html.Div(id='output')
])


@callback(Output('output', 'children'), Input('input', 'message'), prevent_initial_call=True)
def display_output(value):
    return 'received {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
