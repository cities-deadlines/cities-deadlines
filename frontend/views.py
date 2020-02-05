from django.shortcuts import render

def index(request):

    # Pipeline for loading React app:
    #   - Load template 'index.html' (below)
    #   - Add 'main.js' webpack (static file) as script in 'index.html' template
    #   - Load React entry module 'index.js' in 'main.js' script
    #   - Import App component in 'index.js'
    #   - Render App component onto div (with id="app") in 'index.html'
    return render(request, 'index.html')
