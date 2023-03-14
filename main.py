from flask import Flask, render_template
from flask_cors import CORS
import simplegcd.Deployer as gcd

app = Flask(__name__)
CORS(app)
gcd.PROJECT = "resonant-rock-376300"
gcd.ZONE = "europe-west2-c"


@app.route("/deploy/<size>")
def deploy(size):
    gcd.deploy_instance_group(
        "test-instance-group", "test-instance",
        "projects/resonant-rock-376300/global/instanceTemplates/instance-template-1", int(size))
    return {}, 200


@app.route("/delete")
def delete():
    gcd.delete_instance_group("test-instance-group")
    return {}, 200


@app.route("/list")
def list_intances():
    arraydict = gcd.list_instances_in_group("test-instance-group")
    return arraydict


if __name__ == "__main__":
    app.run(debug=False)
