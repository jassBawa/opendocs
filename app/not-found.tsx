'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Errorpage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#09111F] text-white">
      <div className="text-center space-y-8">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! Page not found.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/documents"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Go to Documents
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Errorpage;
