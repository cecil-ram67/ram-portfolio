import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaRegDotCircle } from 'react-icons/fa';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface GithubStats {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  login: string;
}

const GithubProfile: React.FC = () => {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  const username = "cecil-ram67";

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        setStats(userData);

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
        const reposData = await reposRes.json();
        if (Array.isArray(reposData)) {
          setRepos(reposData);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-slate-900 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </section>
    );
  }

  return (
    <section id="github" className="py-20 px-6 md:px-12 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center">
            <FaGithub className="mr-3" /> GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700/50 text-center flex flex-col items-center justify-center">
              <img 
                src={stats.avatar_url} 
                alt={`${stats.login} GitHub`} 
                className="w-32 h-32 rounded-full mb-4 border-4 border-white dark:border-slate-700 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">@{stats.login}</h3>
              <div className="flex justify-center space-x-6 mt-4">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.public_repos}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Repositories</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.followers}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Followers</span>
                </div>
              </div>
              <a 
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors inline-block"
              >
                View Profile
              </a>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {repos.map((repo, idx) => (
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={repo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm hover:shadow-md flex flex-col h-full"
                >
                  <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 flex items-center mb-2">
                    <FaRegDotCircle className="mr-2" size={16} />
                    {repo.name}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-auto">
                    <span className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-1.5"></span>
                      {repo.language || "Unknown"}
                    </span>
                    <div className="flex space-x-3">
                      <span className="flex items-center"><FaStar className="mr-1" /> {repo.stargazers_count}</span>
                      <span className="flex items-center"><FaCodeBranch className="mr-1" /> {repo.forks_count}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubProfile;
