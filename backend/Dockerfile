FROM golang:1.9

# Install beego & bee
RUN go get github.com/beego/bee
RUN go get github.com/astaxie/beego
RUN go get github.com/go-sql-driver/mysql
RUN go get github.com/DATA-DOG/godog/cmd/godog

COPY code/ /go/src/github.com/damillano93/usuarios
WORKDIR /go/src/github.com/damillano93/usuarios
CMD go test
CMD bee run
