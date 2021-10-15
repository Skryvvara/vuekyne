package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/xdarkyne/vuekyne/controllers"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/hello", controllers.HandleHello).Methods("GET")

	staticFileDirectory := http.Dir("./assets/")
	staticFileHandler := http.StripPrefix("/assets/", http.FileServer(staticFileDirectory))
	r.PathPrefix("/assets/").Handler(staticFileHandler).Methods("GET")

	http.ListenAndServe(":8000", r)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World")
}
