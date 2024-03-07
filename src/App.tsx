import { Button } from "@/components/ui/button"
import Scroll from "./components/Scroll"
import Book from "./components/Book"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Root from "./components/page/root"

export default function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" Component={Root}/>
    </Routes>
  </Router>
  )
}
