from flask import Flask, redirect, url_for, render_template, request, flash
 
app = Flask(__name__)
 
@app.route("/") 
 
def index():
    return render_template('index.html')

@app.route("/graph") 
 
def index2():
    return render_template('index2.html')
    
 
if __name__ =="__main__":
 
    app.run(debug =True)