from django.http import HttpResponse
import datetime

def login(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)

def register(request):
    raise NotImplementedError