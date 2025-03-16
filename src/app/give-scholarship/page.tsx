"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, DollarSign, Calendar, GraduationCap, Users, Info } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"

export default function GiveScholarship() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    deadline: "",
    category: "",
    organization: "",
    description: "",
    requirements: "",
    contactEmail: "",
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation could go here
    if (!formData.title || !formData.amount || !formData.deadline) {
      toast.error("Missing Information", {
        description: "Please fill in all required fields before submitting",
      })
      return
    }

    // Form submission logic would go here
    console.log("Form submitted:", formData)

    toast.success("Scholarship Created!", {
      description: "Your scholarship has been successfully published",
    })

    // Reset form after successful submission
    setFormData({
      title: "",
      amount: "",
      deadline: "",
      category: "",
      organization: "",
      description: "",
      requirements: "",
      contactEmail: "",
      termsAccepted: false,
    })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="flex-grow pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Create a Scholarship</h1>
          <p className="text-textgray/90 max-w-2xl">
            Empower students by creating a blockchain-verified scholarship. Your contribution will be transparent and
            reach deserving candidates.
          </p>
        </motion.div>

        <motion.form
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          onSubmit={handleSubmit}
          className="space-y-8 glass-dark rounded-lg p-6 md:p-8"
        >
          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <Info size={18} className="text-accent" />
              Basic Information
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-textgray mb-1">
                  Scholarship Title<span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-textgray mb-1">
                  Organization/Donor Name<span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-textgray mb-1">
                  Scholarship Amount<span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign size={16} className="text-textgray/60" />
                  </div>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full pl-9 px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-white"
                    placeholder="1000.00"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-textgray mb-1">
                  Application Deadline<span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={16} className="text-textgray/60" />
                  </div>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full pl-9 px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-white"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Category & Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" />
              Category & Details
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-textgray mb-1">
                  Scholarship Category<span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-white appearance-none"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medical">Medical</option>
                    <option value="Arts">Arts</option>
                    <option value="Business">Business</option>
                    <option value="Science">Science</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown size={16} className="text-textgray/60" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-textgray mb-1">
                  Contact Email<span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-white"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-textgray mb-1">
                  Scholarship Description<span className="text-accent">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-white"
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="requirements" className="block text-sm font-medium text-textgray mb-1">
                  Eligibility Requirements<span className="text-accent">*</span>
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-white"
                  required
                ></textarea>
                <p className="mt-1 text-xs text-textgray/70">
                  Specify academic, geographic, or other requirements for applicants.
                </p>
              </div>
            </div>
          </div>

          {/* Terms & Submit */}
          <div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="termsAccepted"
                  name="termsAccepted"
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 border-white/30 rounded accent-accent focus:ring-accent"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="termsAccepted" className="font-medium text-textgray">
                  I agree to the{" "}
                  <a href="#" className="text-accent underline">
                    Terms and Conditions
                  </a>{" "}
                  and understand that scholarship information will be publicly visible on the blockchain
                </label>
              </div>
            </div>
            <motion.button
              type="submit"
              className="w-full md:w-auto md:px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users size={18} />
              Publish Scholarship
            </motion.button>
          </div>
        </motion.form>
      </div>
    </main>
  )
}

