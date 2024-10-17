import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzhkNWEzZTY5YzkzZjMwMmFjMDE4Njg5NzkxNDE3YSIsIm5iZiI6MTcyOTE4NTQ3OC40OTc1MTksInN1YiI6IjY3MTEyMjEzMWY5ZDBlZTRiOGNhMDg2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qyki4I5Ii-jgnCFLR4p6mPseFABpKtTiz8xpIDkPDa8'
  }



});

export default instance;