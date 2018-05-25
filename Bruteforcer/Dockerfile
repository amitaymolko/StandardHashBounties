FROM ubuntu:latest
RUN apt-get update && apt-get install -y wget p7zip-full python3 python3-pip libssl-dev
RUN mkdir -p /usr/local/breaker
COPY breaker /usr/local/breaker
RUN wget https://hashcat.net/files/hashcat-4.1.0.7z && 7z x hashcat-4.1.0.7z -o/usr/local/breaker/ -r && \
    mv /usr/local/breaker/hashcat-4.1.0 /usr/local/breaker/hashcat
RUN pip3 install -r /usr/local/breaker/requirements.txt
CMD ["/bin/bash", "-c", "cd /usr/local/breaker/ && python3 /usr/local/breaker/tasks.py"]
