from api import app, db

@app.shell_context_processor
def make_shell_context():
    return {"app": app,
            "db": db,
            # "mail": mail
            }

if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port=5000)