pipeline {
    agent any

    environment {
        // Nama file compose Anda (pastikan ini .yml atau .yaml sesuai nama file Anda)
        COMPOSE_FILE          = 'docker-compose.yaml' 
        // Nama image lengkap Anda di Docker Hub
        IMAGE_NAME            = 'dafajustitiaa/mobileapp'
        // ID credentials yang Anda buat di Jenkins
        DOCKERHUB_CREDENTIALS = 'tugasmobileapp' 
    }

    stages {
        stage('Checkout Source') {
            steps {
                echo '🔄 Mengambil source code dari GitHub...'
                // Menggunakan branch master sesuai log terakhir
                git branch: 'master', url: 'https://github.com/dafaJustitia/mobileAPP.git'
            }
        }

        // TAHAP BARU: Membersihkan kontainer lama
        stage('Cleanup Previous Run') {
            steps {
                echo '🧹 Membersihkan container lama (jika ada)...'
                // Menggunakan bat karena agent Anda Windows
                // Menggunakan COMPOSE_FILE yang didefinisikan di environment
                bat "docker-compose -f ${COMPOSE_FILE} down --remove-orphans"
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🏗️ Membangun image Docker...'
                // Menggunakan bat karena agent Anda Windows
                // Menggunakan IMAGE_NAME yang didefinisikan di environment
                bat "docker build -t \"${IMAGE_NAME}\" ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo '📦 Mengunggah image ke Docker Hub...'
                script {
                    // Gunakan blok withRegistry agar Jenkins menangani login & logout secara otomatis
                    // Pastikan DOCKERHUB_CREDENTIALS cocok dengan ID di Jenkins
                    docker.withRegistry('https://registry.hub.docker.com', DOCKERHUB_CREDENTIALS) {
                        // Push image yang sudah di-build
                        docker.image(IMAGE_NAME).push()
                    }
                }
            }
        }

        stage('Run with Docker Compose') {
            steps {
                echo '🚀 Menjalankan container aplikasi...'
                // Menggunakan bat karena agent Anda Windows
                // Menggunakan COMPOSE_FILE yang didefinisikan di environment
                bat "docker-compose -f ${COMPOSE_FILE} up -d"
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline berhasil! Image telah dipush ke Docker Hub dan aplikasi dijalankan.'
        }
        failure {
            echo '❌ Build gagal! Cek log pipeline untuk melihat kesalahan.'
        }
        // Selalu coba logout dari Docker Hub setelah selesai
        always {
             echo '🚪 Logout dari Docker Hub...'
             // Menggunakan bat karena agent Anda Windows
             bat 'docker logout'
        }
    }
}

