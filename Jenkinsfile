pipeline {
    agent any

    environment {
        // Nama file compose Anda
        COMPOSE_FILE = 'docker-compose.yml'
        IMAGE_NAME = 'mobileapp'
    }

    stages {
        stage('Checkout Source') {
            steps {
                echo '🔄 Mengambil source code dari GitHub...'
                // Log Anda menunjukkan Anda menggunakan branch 'master'
                git branch: 'master', url: 'https://github.com/dafaJustitia/mobileAPP.git'
            }
        }

        stage('Build and Run with Docker Compose') {
            steps {
                echo '🚀 Membersihkan container lama (jika ada)...'
                // TAMBAHKAN INI: 'down' akan stop & hapus container
                // yang terdefinisi di file compose ini.
                // Ini aman dijalankan walaupun container tidak ada.
                bat "docker-compose -f ${COMPOSE_FILE} down"
                
                echo '🚀 Membangun dan menjalankan container baru...'
                
                // Perintah ini akan:
                // 1. Menemukan docker-compose.yaml
                // 2. Membangun image (karena ada '--build')
                // 3. Menjalankan container di background
                // --remove-orphans ditambahkan untuk kebersihan ekstra
                bat "docker-compose -f ${COMPOSE_FILE} up -d --build --remove-orphans"
            }
        }

        stage('Post-Build') {
            steps {
                echo '✅ Build dan Deploy selesai! Aplikasi berhasil dijalankan.'
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline berhasil.'
        }
        failure {
            echo '❌ Build gagal! Cek log pipeline untuk melihat kesalahan.'
        }
    }
}