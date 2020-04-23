import os
import random
from locust import HttpLocust, TaskSet, runners, task, web
# from locust_check_results import run_validation_check // missing dep

def get_id():
    return random.randint(1,100001)

names = ['string', 'name', 'nitzan', 'hardon', 'memory', 'leak' 'aaaa', 'bbbb', 'cccc', 'asdfasfsa', 'iy', 'nihfq', 'aga', 'jasdfh', 'csscs', 'dddd']
def get_name():
    return random.choice(names)

class LocustSet(TaskSet):

    def on_start(self):
        pass

    def on_stop(self):
        pass

    @task(1)
    def get_command(self):
        id = get_id()
        self.client.get("/ctrl/%i" % id, name="/ctrl/[id]")

    @task(1)
    def post_command(self):
        i = get_id()
        body = {'name': get_name()}

        self.client.post("/ctrl/%i" % i, name="/ctrl/[id]", json=body)

    @task(1)
    def put_command(self):
        id = get_id()
        name = get_name()
        self.client.put("/ctrl/%i?name=%s" % (id, name), name="/ctrl/[id]?name=[name]")

    @task(1)
    def delete_command(self):
        id = get_id()
        self.client.delete("/ctrl/%i" % id, name="/ctrl/[id]")

class MemLeakLocust(HttpLocust):
    host = "http://iceberg-users-apps-ml-mem-5-7-1.essva2.qa7.vonagenetworks.net:5000"
    task_set = globals()[os.getenv('TASK_SET', 'LocustSet')]
    min_wait = 0
    max_wait = 0


def get_common_headers(method, path):
    common_headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    return common_header
