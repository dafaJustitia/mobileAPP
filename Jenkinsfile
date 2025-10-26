pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yaml'
        IMAGE_NAME   = 'mobileAPP' // Nama image lokal, tidak perlu username Docker Hub
    }

    stages {
        stage('Checkout Source') {
            steps {
                echo '🔄 Mengambil source code dari GitHub...'
                git branch: 'main', url: 'https://github.com/dafaJustitia/mobileAPP.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🏗  Membangun image Docker...'
                script {
                    // Membangun image dengan nama yang didefinisikan di environment
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Run with Docker Compose') {
            steps {
                echo '🚀 Menjalankan container aplikasi dengan Docker Compose...'
                // Pastikan docker-compose.yaml menggunakan nama image yang sama
                bat "docker-compose -f ${COMPOSE_FILE} up -d"
            }
        }

        stage('Post-Build') {
            steps {
                echo '✅ Build dan Deploy lokal selesai! Aplikasi berhasil dijalankan.'
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline build dan deploy lokal berhasil.'
        }
        failure {
            echo '❌ Build gagal! Cek log pipeline untuk melihat kesalahan.'
        }
    }
}